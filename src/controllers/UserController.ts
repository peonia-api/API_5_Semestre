import AppDataSource from "../data-source";
import { Request, Response } from 'express';
import { User, Status } from '../entities/User';
import { generateToken } from '../middlewares';
import user from "../routes/user";


class UserController {
  public async login(req: Request, res: Response): Promise<Response> {
    const { userEmail, userPassword } = req.body;
    //verifica se foram fornecidos os parâmetros
    if (!userEmail || !userPassword || userEmail.trim() === "" || userPassword.trim() === "") {
      return res.json({ error: "e-userEmail e senha necessários" });
    }
    // como a propriedade userPassword não está disponível para select {select: false},
    // então precisamos usar esta conulta para forçar incluir a propriedade 
    const usuario: any = await AppDataSource
      .getRepository(User)
      .createQueryBuilder("user")
      .select()
      .addSelect('user.userPassword')
      .where("user.userEmail=:userEmail", { userEmail })
      .getOne();

    if(usuario.status != 1){
      return res.status(400).json({ error: "Usuário sem  Permissão de logar" });
    }  
    if (usuario && usuario.id) {
      console.log(usuario)
      const r = await usuario.compare(userPassword);
      console.log(r)
      if (r) {
        // cria um token codificando o objeto {id,userEmail}
        const token = await generateToken({ id: usuario.id, userEmail: usuario.userEmail });
        // retorna o token para o cliente
        return res.json({
          id: usuario.id,
          userName: usuario.userName,
          userCpf: usuario.userCpf,
          userMatricula: usuario.userMatricula,
          userTelefone: usuario.userTelefone,
          userType: usuario.userType,
          userEmail: usuario.userEmail,
          icone: usuario.icone,
          token
        });
      }
      return res.status(400).json({ error: "Dados de login não conferem" });
    }
    else {
      return res.status(400).json({ error: "Usuário não localizado" });
    }
  }



  public async create(req: Request, res: Response): Promise<Response> {
    const { userEmail, userPassword } = req.body;
    //verifica se foram fornecidos os parâmetros
    if (!userEmail || !userPassword || userEmail.trim() === "" || userPassword.trim() === "") {
      return res.json({ error: "e-userEmail e senha necessários" });
    }
    const obj = new User();
    obj.userEmail = userEmail;
    obj.userPassword = userPassword;
    // o hook BeforeInsert não é disparado com AppDataSource.manager.save(User,JSON),
    // mas é disparado com AppDataSource.manager.save(User,objeto do tipo User)
    // https://github.com/typeorm/typeorm/issues/5493
    const usuario: any = await AppDataSource.manager.save(User, obj).catch((e) => {
      // testa se o e-userEmail é repetido
      if (/(userEmail)[\s\S]+(already exists)/.test(e.detail)) {
        return { error: 'e-userEmail já existe' };
      }
      return { error: e.message };
    })
    if (usuario.id) {
      // cria um token codificando o objeto {idusuario,userEmail}
      const token = await generateToken({ id: usuario.id, userEmail: usuario.userEmail });
      // retorna o token para o cliente
      return res.json({
        id: usuario.id,
        userEmail: usuario.userEmail,
        token
      });
    }
    return res.json(usuario);
  }

  // o usuário pode atualizar somente os seus dados
  public async update(req: Request, res: Response): Promise<Response> {
    const { userEmail, userPassword } = req.body;
    // obtém o id do usuário que foi salvo na autorização na middleware
    const { id } = res.locals;
    const usuario: any = await AppDataSource.manager.findOneBy(User, { id }).catch((e) => {
      return { error: "Identificador inválido" };
    })
    if (usuario && usuario.id) {
      if (userEmail !== "") {
        usuario.userEmail = userEmail;
      }
      if (userPassword !== "") {
        usuario.userPassword = userPassword;
      }
      const r = await AppDataSource.manager.save(User, usuario).catch((e) => {
        // testa se o Email é repetido
        if (/(userEmail)[\s\S]+(already exists)/.test(e.detail)) {
          return ({ error: 'Email já existe' });
        }
        return e;
      })
      if (!r.error) {
        return res.json({ id: usuario.id, userEmail: usuario.userEmail });
      }
      return res.json(r);
    }
    else if (usuario && usuario.error) {
      return res.json(userEmail)
    }
    else {
      return res.json({ error: "Usuário não localizado" });
    }
  }

  public async getHistoricUser(req: Request, res: Response): Promise<Response> {
    try{
      const userRepository = AppDataSource.getRepository(User)
      const allUser = await userRepository.find()
      return res.json(allUser)
    }catch(err){
      return res.status(400).json({'message': "Erro ao pegar os usuarios!", 'error': true})
    }
  
  }

  public async getUser(req: Request, res: Response): Promise<Response> {
    try{
      const idUser: any = req.params.uuid
      const userRepository = AppDataSource.getRepository(User)
      const allUser = await userRepository.findOneBy({ id: idUser })
      return res.json(allUser)
    }catch(err){
      return res.status(400).json({'message': "Erro ao pegar o usuario!", 'error': true})
    }
  }

  // public async getAllUser(req: Request, res: Response): Promise<Response> {
  //   const userRepository = AppDataSource.getRepository(User)
  //   const allUser = await userRepository.query("SELECT id, userName FROM User")
  //   console.log(allUser)
  //   return res.json(allUser)
  // }

  public async getId(req: Request, res: Response): Promise<Response> {
    try{
      const { userEmail } = req.body
      const usuario: any = await AppDataSource
        .getRepository(User)
        .createQueryBuilder("user")
        .select()
        .addSelect('user.userPassword')
        .where("user.userEmail=:userEmail", { userEmail })
        .getOne();
      // const userRepository = AppDataSource.getRepository(User)
      // const allUser = await usuario.findBy({ userEmail: userEmail })
      console.log(usuario);
      return res.json(usuario)
    }catch(err){
      return res.status(400).json({'message': "Erro ao pegar o usuario!", 'error': true})
    }
    
  }

  public async getEmail(req: Request, res: Response): Promise<Response> {
    try{
      const userEmail: any = req.params.email
      const userRepository = AppDataSource.getRepository(User)
      const allUser = await userRepository.findOneBy({ userEmail: userEmail })
      if (allUser == undefined) {
        return res.json({ Existe: false })
      }
      else {
        return res.json({ Existe: true })
      }
    }catch(err){
      return res.status(400).json({'erro': true, err})
    }
  
  }

  public async postUser(req: Request, res: Response): Promise<Response> {
    try{
      const createUser = req.body
      const userRepository = AppDataSource.getRepository(User)
      const insertUser = new User();
      insertUser.userName = createUser.userName
      // insertUser.userPosition = createUser.userPosition
      insertUser.userEmail = createUser.userEmail
      insertUser.userPassword = createUser.userPassword
      insertUser.userType = createUser.userType
      insertUser.icone = createUser.icone
      insertUser.userCpf = createUser.userCpf,
      insertUser.userMatricula = createUser.userMatricula,
      insertUser.userTelefone = createUser.userTelefone
      insertUser.status = createUser.status
      const allUser = await userRepository.save(insertUser)
      return res.json(allUser)
    }catch(err){
      return res.status(400).json({'message': 'Erro ao criar usuario!', 'erro': true, err})
    }
  }

  public async putUser(req: Request, res: Response): Promise<Response> {
    try{
      const createUser = req.body
      const idUser: any = req.params.uuid
      const userRepository = AppDataSource.getRepository(User)
      const findUser = await userRepository.findOneBy({ id: idUser })
      findUser.userName = createUser.userName
      // findUser.userPosition = createUser.userPosition
      findUser.userEmail = createUser.userEmail
      findUser.userType = createUser.userType
      findUser.userCpf = createUser.userCpf,
      findUser.userMatricula = createUser.userMatricula,
      findUser.userTelefone = createUser.userTelefone
  
      const allUser = await userRepository.save(findUser)
      return res.json(allUser)
    }catch(err){
      return res.status(400).json({'message': 'Erro ao alterar o usuario!', 'erro': true})
    }
  }
  public async patchStatus(req: Request, res: Response): Promise<Response> {
    try {
      const { status } = req.body;
      const email: any = req.params.email
      const userRepository = AppDataSource.getRepository(User)
      const find = await userRepository.findOneBy({ userEmail: email })
  
      if (!find) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
  
      // Certifique-se de validar o status, se ele é um valor válido da enum Status
      if (!(status in Status)) {
        return res.status(400).json({ error: 'Status inválido' });
      }
  
      find.status = status;
      const updatedUser = await userRepository.save(find);
  
      return res.json(updatedUser);                                                    
    } catch (err) {
      return res.status(400).json({ error: 'Erro ao atualizar o status do usuário' });
    }
  }
  

  public async putUserPerfil(req: Request, res: Response): Promise<Response> {
    try {
      const createUser = req.body
      const idUser: any = req.params.uuid
      const userRepository = AppDataSource.getRepository(User)
      const findUser = await userRepository.findOneBy({ userEmail: idUser })
      findUser.userName = createUser.userName
      findUser.userEmail = createUser.userEmail
      findUser.userCpf = createUser.userCpf,
      findUser.userMatricula = createUser.userMatricula,
      findUser.userTelefone = createUser.userTelefone
      findUser.icone = createUser.icone
      const allUser = await userRepository.save(findUser)
      return res.json(allUser)
    } catch (err) {
      res.status(400).json({ menssagem: "Erro ao mudar" })
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<Response> {
    try{
      const idUser: any = req.params.uuid
      const userRepository = AppDataSource.getRepository(User)
      const findUser = await userRepository.findOneBy({ id: idUser })
      const allUser = await userRepository.remove(findUser)
      return res.json(allUser)
    }catch(err){
      return res.status(400).json({'message': 'Erro ao deletar o usuario!', 'erro': true})
    }
  }

  public async putPassword(req: Request, res: Response): Promise<Response> {
    try{
       // const { userEmail }: any = req.params.uuid
      const { userPassword, userEmail } = req.body
      const usuario: any = await AppDataSource.manager
        .getRepository(User)
        .createQueryBuilder("user")
        .select()
        .addSelect('user.userPassword')
        .where("user.userEmail=:userEmail", { userEmail })
        .getOne();
      console.log(usuario);
      // const userRepository = AppDataSource.getRepository(User)
      // const findUser = await userRepository.findOneBy({ id: idUser })
      usuario.userPassword = userPassword

      // const allUser = await usuario.save(usuario)
      const r = await AppDataSource.manager.save(User, usuario)
      return res.json(r)
    }catch(err){
      return res.status(400).json({'message': 'Erro ao mudar a senha!', 'erro': true})
    }
  }

  public async getVeficaType(req: Request, res: Response): Promise<Response> {
    try {
      const userRepository = await AppDataSource.getRepository(User)
        .createQueryBuilder('user')
        .select('DISTINCT user.userType')
        .where("user.userType  != 'Comum' AND user.userType  != 'Admin'")
        .getRawMany()
      return res.json(userRepository)
    } catch (err) {
      return res.status(400).json({ menssagem: "Erro ao verificar" })
    }
  }

  public async getVerificaEmail(req: Request, res: Response): Promise<Response>{
    try{
      const { userEmail } = req.body
      const usuario: any = await AppDataSource.manager
        .getRepository(User)
        .createQueryBuilder("user")
        .select()
        .addSelect('user.userPassword')
        .where("user.userEmail=:userEmail", { userEmail })
        .getOne();
      return res.status(200).json(usuario)
    }catch(err){
      return res.status(400).json({"erro": true, "message": "Erro ao verificar!", "err": err})
    }
  }
}

export default new UserController();