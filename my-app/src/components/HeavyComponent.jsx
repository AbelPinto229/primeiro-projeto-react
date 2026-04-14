import { useState } from 'react';

function HeavyComponent() {
    const [items, setItems] = useState([
        'Pão', 'Leite', 'Ovos', 'Arroz', 'Massa',
        'Frango', 'Tomate', 'Cebola', 'Alho', 'Azeite'
    ]);
    const [novoItem, setNovoItem] = useState('');

    function adicionarItem() {
        const texto = novoItem.trim();
        if (texto && !items.includes(texto)) {
            setItems([...items, texto]);
            setNovoItem('');
        }
    }

    function eliminarItem(index) {
        setItems(items.filter((_, i) => i !== index));
    }

    return (
        <div style={{ padding: '20px', border: '2px solid #4CAF50', borderRadius: '10px', marginTop: '20px', maxWidth: '500px' }}>
            <h2>Lista de Compras</h2>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                <input
                    type="text"
                    value={novoItem}
                    onChange={(e) => setNovoItem(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && adicionarItem()}
                    placeholder="Adicionar item..."
                    style={{ flex: 1, padding: '8px 12px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px' }}
                />
                <button
                    onClick={adicionarItem}
                    style={{ padding: '8px 16px', background: '#4CAF50', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    Adicionar
                </button>
            </div>

            {items.length === 0 ? (
                <p style={{ color: '#888' }}>Lista vazia. Adiciona um item!</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {items.map((item, index) => (
                        <li
                            key={index}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '10px 12px',
                                marginBottom: '8px',
                                background: '#f5f5f5',
                                borderRadius: '6px',
                            }}
                        >
                            <span>{item}</span>
                            <button
                                onClick={() => eliminarItem(index)}
                                style={{
                                    background: '#e74c3c',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '4px',
                                    padding: '5px 12px',
                                    cursor: 'pointer',
                                    fontSize: '13px',
                                }}
                            >
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <p style={{ marginTop: '15px', color: '#666' }}>Total: {items.length} items</p>
        </div>
    );
}

export default HeavyComponent;
