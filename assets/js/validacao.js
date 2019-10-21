$("#formHome").validate({
    debug: true,
    rules: {
      campo1: {
        required: true,
            email: true,
      },
          campo2:{
                minlength: 3,
               maxlength: 4,
               // ou
               rangelength: [3, 4] //Realiza a mesma coisa dos anteriores
          },
          campo3:{
                min: 10,
               max: 15,
               // ou
               range: [10, 15] //Realiza a mesma coisa dos anteriores
          },
          campo4:{
                accept: "audio/*"
          },
          telefone_pessoal: {
        require_from_group: [1, ".grupo_telefone"]
      },
      telefone_casa: {
        require_from_group: [1, ".grupo_telefone"]
      },
      telefone_trabalho: {
        require_from_group: [1, ".grupo_telefone"]
      }    
    },
    messages:{
          //exemplo
       campo4: {
        accept: "Mensagem customizada: Informe um tipo de arquivo válido!"
                   }
    }
});
	
jQuery.validator.addMethod('celular', function (value, element) {
    value = value.replace("(","");
    value = value.replace(")", "");
    value = value.replace("-", "");
    value = value.replace(" ", "").trim();
    if (value == '0000000000') {
        return (this.optional(element) || false);
    } else if (value == '00000000000') {
        return (this.optional(element) || false);
    } 
    if (["00", "01", "02", "03", , "04", , "05", , "06", , "07", , "08", "09", "10"]
    .indexOf(value.substring(0, 2)) != -1) {
        return (this.optional(element) || false);
    }
    if (value.length < 10 || value.length > 11) {
        return (this.optional(element) || false);
    }
    if (["6", "7", "8", "9"].indexOf(value.substring(2, 3)) == -1) {
        return (this.optional(element) || false);
    }
    return (this.optional(element) || true);
}, 'Informe um número de telefone celular válido!'); 
//Nosso formulário, pronto para ser validado
$( "#formularioValidaTelefoneCelular" ).validate({
  debug: true,
  rules: {
    telefone_celular: {
      required: true,
                  celular: true,
                }
  } 
});

	
//Valida o formulário
$( "#formHome" ).validate({
  debug: true
});
 // apelido necessário para o cRequired com nova mensagem
 $.validator.addMethod("cRequired", $.validator.methods.required,
   "Informação do cliente necessária");
 // apelido cMinlength
 $.validator.addMethod("cMinlength", $.validator.methods.minlength,
   $.validator.format("Informação do cliente deve ter pelo menos  caracteres"));
 // combina os dois, aplicando as regras nos campos que contenham a classe chamada "cliente"
 $.validator.addClassRules("cliente", { cRequired: true, cMinlength: 2 });