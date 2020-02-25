AccountsTemplates.addFields([
{
    _id: 'Nombre',
    type: 'text',
    displayName: 'Nombre completo',
    required: true,
    placeholder: {
        signUp: "At least six characters"
    }
},
{
    _id: "Sexo",
    type: "select",
    displayName: "Sexo",
    required: true,
    select: [
        {
            text: "Hombre",
            value: "Hombre",
        },
        {
            text: "Mujer",
            value: "Mujer",
        },
    ]
},
{
    _id: "Tipo",
    type:'select',
    required: true,
    select: [
        {
            text: "Presidente",
            value: "Presidente",
        },
        {
            text: "Secretaria",
            value: "Secretaria",
        },
        {
            text: "Socio",
            value: "Socio",
        },
        {
            text: "Cliente",
            value: "Cliente",
        },
    ]
},
{
    _id: 'Empresa',
    type: 'text',
    displayName: 'Nombre de Empresa',
    required: true,
    placeholder: {
        signUp: "Nombre de Empresa"
    }
},
{
    _id: 'Cargo',
    type: 'text',
    displayName: 'Cargo:',
    required: true,
    placeholder: {
        signUp: "Cargo Actual"
    }
}
]);