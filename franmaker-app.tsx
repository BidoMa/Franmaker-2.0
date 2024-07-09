import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Header Component
const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">Franmaker</Link>
        <div>
          <Link to="/pricing" className="px-4 py-2 mr-2">Precios</Link>
          <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded">Login</Link>
        </div>
      </nav>
    </header>
  );
};

// Home Component
const Home = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a Franmaker</h1>
      <p className="text-xl mb-8">La plataforma perfecta para crear y gestionar tu franquicia.</p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
        Comienza ahora
      </button>
    </div>
  );
};

// Pricing Component
const PriceCard = ({ title, price, features }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-4xl font-bold mb-6">${price}<span className="text-sm font-normal">/mes</span></p>
    <ul className="mb-6">
      {features.map((feature, index) => (
        <li key={index} className="mb-2">{feature}</li>
      ))}
    </ul>
    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded">Elegir plan</button>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      title: 'Básico',
      price: 29,
      features: ['1 franquicia', 'Soporte por email', 'Análisis básicos']
    },
    {
      title: 'Pro',
      price: 79,
      features: ['Hasta 5 franquicias', 'Soporte prioritario', 'Análisis avanzados']
    },
    {
      title: 'Empresarial',
      price: 199,
      features: ['Franquicias ilimitadas', 'Soporte 24/7', 'Análisis personalizados']
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Planes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PriceCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

// Login Component
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log('Login attempt', { email, password });
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Iniciar sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
