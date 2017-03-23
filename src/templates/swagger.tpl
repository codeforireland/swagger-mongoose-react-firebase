var source = CodeGen.getCustomCode({
    moduleName: 'Test',
    className: 'Test',
    swagger: swaggerSpec,
    template: {
        class: fs.readFileSync('my-class.mustache', 'utf-8'),
        method: fs.readFileSync('my-method.mustache', 'utf-8'),
        type: fs.readFileSync('my-type.mustache', 'utf-8')
    }
});