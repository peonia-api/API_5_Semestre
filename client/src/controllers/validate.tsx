// // Função de validação para o número
// const validateNumero = (numero: number | null): string | null => {
//     if (numero === null || numero <= 0) {
//       return "Número inválido";
//     }
//     return null; // Retorna null se o número for válido
//   };
  
//   // Função de validação para o serial
//   const validateSerial = (serial: string | null): string | null => {
//     if (!serial || serial.trim() === "") {
//       return "Serial é obrigatório";
//     }
//     return null; // Retorna null se o serial for válido
//   };
  
//   // Função de validação para a latitude
//   const validateLatitude = (latitude: number | null): string | null => {
//     if (latitude === null || latitude < -90 || latitude > 90) {
//       return "Latitude inválida";
//     }
//     return null; // Retorna null se a latitude for válida
//   };
  
//   // Função de validação para a longitude
//   const validateLongitude = (longitude: number | null): string | null => {
//     if (longitude === null || longitude < -180 || longitude > 180) {
//       return "Longitude inválida";
//     }
//     return null; // Retorna null se a longitude for válida
//   };
  
//   // Função de validação para a observação
//   const validateObservacao = (observacao: string | null): string | null => {
//     // Você pode adicionar suas próprias regras de validação aqui
//     // Por exemplo, verificar o comprimento mínimo ou máximo da observação
//     if (observacao && observacao.length > 100) {
//       return "Observação muito longa";
//     }
//     return null; // Retorna null se a observação for válida
//   };
  
  
  
//   const uploadImage = async () => {
//     // Validar campos
//     const numeroError = validateNumero(numero);
//     const serialError = validateSerial(serial);
//     const latitudeError = validateLatitude(latitude);
//     const longitudeError = validateLongitude(longitude);
//     const observacaoError = validateObservacao(observacao);
  
//     // Verificar se há erros de validação
//     if (numeroError || serialError || latitudeError || longitudeError || observacaoError) {
//       Alert.alert("Erro de validação", "Por favor, verifique os campos do formulário.");
//       return; // Impede o envio se houver erros de validação
//     }
  
//     // Se não houver erros de validação, continue com o envio
//     if (serial && image) {
//       setUploading(true); // Inicia a animação de envio
  
//       try {
//         const response = await upload(serial, { uri: image });
//         await createEquipment({
//           type: selectedEquipa,
//           numero: numero,
//           serial: serial,
//           latitude: latitude,
//           longitude: longitude,
//           observations: observacao,
//           url: response,
//           status: true
//         });
//       } catch (error) {
//         console.error(error);
//         Alert.alert("Erro", "Ocorreu um erro ao enviar os dados para o banco.");
//       } finally {
//         setUploading(false); // Finaliza a animação de envio
//         navigation.navigate('Equipamentos');
//       }
//     }
//   };