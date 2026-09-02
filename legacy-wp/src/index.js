import { createRoot } from '@wordpress/element';
import App from './App';

document.addEventListener('DOMContentLoaded', function () {
    const rootElement = document.getElementById('react-root');
    if (rootElement) {
        const root = createRoot(rootElement);
        root.render(<App />);
    }
});
