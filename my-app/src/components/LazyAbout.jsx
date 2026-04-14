import { lazy, Suspense, useState } from 'react';
import Spinner from './Spinner';

const HeavyComponent = lazy(() =>
    new Promise(resolve => setTimeout(resolve, 3000))
        .then(() => import('./HeavyComponent'))
);

function LazyAbout() {
    const [mostrar, setMostrar] = useState(false);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Lista Lazy</h1>
            <p>Lazy: O componente pesado só é carregado quando clicares no botão.</p>

            <button
                onClick={() => setMostrar(!mostrar)}
                style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
            >
                {mostrar ? 'Esconder' : 'Mostrar'} Componente Pesado
            </button>

            {mostrar && (
                <Suspense fallback={<Spinner />}>
                    <HeavyComponent />
                </Suspense>
            )}
        </div>
    );
}

export default LazyAbout;   