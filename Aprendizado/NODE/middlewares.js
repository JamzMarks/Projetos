async function passo1(ctx, next) {
    ctx.valor1 = 'mid1';
    await next();
}

async function passo2(ctx, next) {
    ctx.valor2 = 'mid2';
    await next();
}

async function passo3(ctx) {
    ctx.valor3 = 'mid3';
}

async function exec(ctx, ...middlewares) {
    const execPasso = async (indice) => {
        if (indice < middlewares.length) {
            const next = () => execPasso(indice + 1);
            await middlewares[indice](ctx, next);
        }
    };
    await execPasso(0);
}

// Usando o padrão modernizado
const ctx = {};
exec(ctx, passo1, passo2, passo3)
    .then(() => console.log(ctx))
    .catch(error => console.error('Erro durante a execução dos middlewares:', error));
