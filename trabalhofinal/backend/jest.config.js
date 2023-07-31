//jest.config.js

module.exports = {
   preset: 'ts-jest',
   testEnvironment: 'node',
   testMatch: ['**/*.test.ts'],
   testPathIgnorePatterns: ['/node_modules/'],
   collectCoverage: true,
   // collectCoverageFrom: ['src/resources/produto/produto.service.ts'],
   // collectCoverageFrom: ['src/resources/tipoUsuario/tipoUsuario.service.ts'],
   // collectCoverageFrom: ['src/resources/auth/auth.service.ts'],
   collectCoverageFrom: ['src/resources/usuario/usuario.service.ts'],
};