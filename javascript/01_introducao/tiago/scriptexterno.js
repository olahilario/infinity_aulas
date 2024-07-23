let idade = prompt('Digite sua idade')
        if (idade < 18) {
            msg = 'Tudo bem, você ainda não pode ser preso'
            console.log(msg)
            document.write(`<h2>${msg}</h2>`)
        } else {
            msg = 'Opa...'
            console.log('Opa...')
            document.write(`<h1>${msg}</h1>`)
        }
