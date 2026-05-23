import { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    nome: '',
    categoria: '',
    preco: '',
    quantidade: '',
    descricao: '',
    fornecedor: '',
    codigoBarras: ''
  });

  const [produtos, setProdutos] = useState<any[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProdutos(prev => [...prev, { ...formData, id: Date.now() }]);
    setFormData({
      nome: '',
      categoria: '',
      preco: '',
      quantidade: '',
      descricao: '',
      fornecedor: '',
      codigoBarras: ''
    });
  };

  return (
    <div className="min-h-screen w-full bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-block px-6 py-3 rounded-lg mb-4" style={{ backgroundColor: 'var(--navy-blue)' }}>
            <h1 className="text-white m-0">Sistema de Cadastro de Produtos</h1>
          </div>
          <p className="text-foreground/70">Gerencie seu estoque de forma simples e eficiente</p>
        </div>

        {/* Formulário de Cadastro */}
        <div className="bg-card rounded-xl shadow-lg p-8 mb-8 border-2" style={{ borderColor: 'var(--aqua-green)' }}>
          <h2 className="mb-6 pb-3 border-b-2" style={{ borderColor: 'var(--indigo-blue)', color: 'var(--navy-blue)' }}>
            Cadastrar Novo Produto
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome do Produto */}
              <div>
                <label htmlFor="nome" className="block mb-2" style={{ color: 'var(--navy-blue)' }}>
                  Nome do Produto *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-input-background focus:outline-none focus:border-[var(--aqua-green)] transition-colors"
                  placeholder="Digite o nome do produto"
                />
              </div>

              {/* Categoria */}
              <div>
                <label htmlFor="categoria" className="block mb-2" style={{ color: 'var(--navy-blue)' }}>
                  Categoria *
                </label>
                <select
                  id="categoria"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-input-background focus:outline-none focus:border-[var(--aqua-green)] transition-colors"
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="eletronicos">Eletrônicos</option>
                  <option value="alimentos">Alimentos</option>
                  <option value="vestuario">Vestuário</option>
                  <option value="moveis">Móveis</option>
                  <option value="ferramentas">Ferramentas</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              {/* Preço */}
              <div>
                <label htmlFor="preco" className="block mb-2" style={{ color: 'var(--navy-blue)' }}>
                  Preço (R$) *
                </label>
                <input
                  type="number"
                  id="preco"
                  name="preco"
                  value={formData.preco}
                  onChange={handleChange}
                  required
                  step="0.01"
                  min="0"
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-input-background focus:outline-none focus:border-[var(--aqua-green)] transition-colors"
                  placeholder="0.00"
                />
              </div>

              {/* Quantidade */}
              <div>
                <label htmlFor="quantidade" className="block mb-2" style={{ color: 'var(--navy-blue)' }}>
                  Quantidade em Estoque *
                </label>
                <input
                  type="number"
                  id="quantidade"
                  name="quantidade"
                  value={formData.quantidade}
                  onChange={handleChange}
                  required
                  min="0"
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-input-background focus:outline-none focus:border-[var(--aqua-green)] transition-colors"
                  placeholder="0"
                />
              </div>

              {/* Fornecedor */}
              <div>
                <label htmlFor="fornecedor" className="block mb-2" style={{ color: 'var(--navy-blue)' }}>
                  Fornecedor
                </label>
                <input
                  type="text"
                  id="fornecedor"
                  name="fornecedor"
                  value={formData.fornecedor}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-input-background focus:outline-none focus:border-[var(--aqua-green)] transition-colors"
                  placeholder="Nome do fornecedor"
                />
              </div>

              {/* Código de Barras */}
              <div>
                <label htmlFor="codigoBarras" className="block mb-2" style={{ color: 'var(--navy-blue)' }}>
                  Código de Barras
                </label>
                <input
                  type="text"
                  id="codigoBarras"
                  name="codigoBarras"
                  value={formData.codigoBarras}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-input-background focus:outline-none focus:border-[var(--aqua-green)] transition-colors"
                  placeholder="000000000000"
                />
              </div>
            </div>

            {/* Descrição */}
            <div>
              <label htmlFor="descricao" className="block mb-2" style={{ color: 'var(--navy-blue)' }}>
                Descrição
              </label>
              <textarea
                id="descricao"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border-2 border-border bg-input-background focus:outline-none focus:border-[var(--aqua-green)] transition-colors resize-none"
                placeholder="Descreva as características do produto..."
              />
            </div>

            {/* Botões */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 rounded-lg text-white transition-all hover:opacity-90 hover:shadow-lg"
                style={{ backgroundColor: 'var(--indigo-blue)' }}
              >
                Cadastrar Produto
              </button>
              <button
                type="button"
                onClick={() => setFormData({
                  nome: '',
                  categoria: '',
                  preco: '',
                  quantidade: '',
                  descricao: '',
                  fornecedor: '',
                  codigoBarras: ''
                })}
                className="px-6 py-3 rounded-lg border-2 transition-all hover:bg-muted"
                style={{ borderColor: 'var(--navy-blue)', color: 'var(--navy-blue)' }}
              >
                Limpar
              </button>
            </div>
          </form>
        </div>

        {/* Lista de Produtos Cadastrados */}
        {produtos.length > 0 && (
          <div className="bg-card rounded-xl shadow-lg p-8 border-2" style={{ borderColor: 'var(--aqua-green)' }}>
            <h2 className="mb-6 pb-3 border-b-2" style={{ borderColor: 'var(--indigo-blue)', color: 'var(--navy-blue)' }}>
              Produtos Cadastrados ({produtos.length})
            </h2>

            <div className="space-y-4">
              {produtos.map((produto) => (
                <div
                  key={produto.id}
                  className="p-4 rounded-lg border-l-4 bg-muted/30"
                  style={{ borderLeftColor: 'var(--aqua-green)' }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <span className="text-sm" style={{ color: 'var(--indigo-blue)' }}>Produto:</span>
                      <p className="font-medium" style={{ color: 'var(--navy-blue)' }}>{produto.nome}</p>
                    </div>
                    <div>
                      <span className="text-sm" style={{ color: 'var(--indigo-blue)' }}>Categoria:</span>
                      <p className="font-medium" style={{ color: 'var(--navy-blue)' }}>{produto.categoria}</p>
                    </div>
                    <div>
                      <span className="text-sm" style={{ color: 'var(--indigo-blue)' }}>Preço:</span>
                      <p className="font-medium" style={{ color: 'var(--navy-blue)' }}>
                        R$ {parseFloat(produto.preco).toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm" style={{ color: 'var(--indigo-blue)' }}>Estoque:</span>
                      <p className="font-medium" style={{ color: 'var(--navy-blue)' }}>{produto.quantidade} unidades</p>
                    </div>
                    {produto.fornecedor && (
                      <div>
                        <span className="text-sm" style={{ color: 'var(--indigo-blue)' }}>Fornecedor:</span>
                        <p className="font-medium" style={{ color: 'var(--navy-blue)' }}>{produto.fornecedor}</p>
                      </div>
                    )}
                    {produto.codigoBarras && (
                      <div>
                        <span className="text-sm" style={{ color: 'var(--indigo-blue)' }}>Código:</span>
                        <p className="font-medium" style={{ color: 'var(--navy-blue)' }}>{produto.codigoBarras}</p>
                      </div>
                    )}
                  </div>
                  {produto.descricao && (
                    <div className="mt-3 pt-3 border-t border-border">
                      <span className="text-sm" style={{ color: 'var(--indigo-blue)' }}>Descrição:</span>
                      <p className="text-sm text-foreground/70">{produto.descricao}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}