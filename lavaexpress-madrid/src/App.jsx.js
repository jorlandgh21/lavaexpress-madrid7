import React, { useState } from 'react';
import { ShoppingCart, MapPin, Clock, Sparkles, Check, X } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [orderForm, setOrderForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    fecha: '',
    hora: '',
    notas: ''
  });
  const [orderComplete, setOrderComplete] = useState(false);

  const servicios = [
    {
      id: 1,
      nombre: 'Lavado Estándar',
      descripcion: 'Lavado y secado de ropa habitual',
      precio: 15,
      unidad: 'por bolsa (8kg)',
      icon: '👕'
    },
    {
      id: 2,
      nombre: 'Lavado Premium',
      descripcion: 'Lavado delicado con productos de alta calidad',
      precio: 25,
      unidad: 'por bolsa (8kg)',
      icon: '✨'
    },
    {
      id: 3,
      nombre: 'Planchado',
      descripcion: 'Planchado profesional de prendas',
      precio: 20,
      unidad: 'por 10 prendas',
      icon: '👔'
    },
    {
      id: 4,
      nombre: 'Tintorería',
      descripcion: 'Limpieza en seco para prendas delicadas',
      precio: 30,
      unidad: 'por servicio',
      icon: '🧥'
    }
  ];

  const addToCart = (servicio) => {
    const existingItem = cart.find(item => item.id === servicio.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === servicio.id 
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...servicio, cantidad: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, cantidad) => {
    if (cantidad === 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, cantidad } : item
      ));
    }
  };

  const totalCart = cart.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);

  const handleSubmitOrder = (e) => {
    if (e) e.preventDefault();
    
    if (cart.length === 0) {
      alert('Por favor, añade al menos un servicio a tu pedido');
      return;
    }

    // Aquí iría la integración con Stripe/Redsys
    // Por ahora simulamos el pago exitoso
    setOrderComplete(true);
    setCurrentPage('confirmacion');
  };

  // Página de inicio
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="text-indigo-600" size={32} />
            <h1 className="text-2xl font-bold text-indigo-600">LavaExpress Madrid</h1>
          </div>
          <button 
            onClick={() => setShowCart(!showCart)}
            className="relative bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-2"
          >
            <ShoppingCart size={20} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Lavandería a Domicilio en Madrid Centro
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Recogemos, lavamos y entregamos tu ropa en 24-48 horas. 
          Servicio profesional, rápido y a precio justo.
        </p>
        <button 
          onClick={() => setCurrentPage('servicios')}
          className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 shadow-lg"
        >
          Ver Servicios y Pedir Ahora
        </button>
      </section>

      {/* Cómo Funciona */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">¿Cómo Funciona?</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h4 className="font-semibold mb-2">1. Haz tu pedido</h4>
              <p className="text-gray-600">Selecciona servicios y agenda recogida</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚗</span>
              </div>
              <h4 className="font-semibold mb-2">2. Recogemos</h4>
              <p className="text-gray-600">Pasamos por tu domicilio</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h4 className="font-semibold mb-2">3. Lavamos</h4>
              <p className="text-gray-600">Cuidado profesional de tu ropa</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📦</span>
              </div>
              <h4 className="font-semibold mb-2">4. Entregamos</h4>
              <p className="text-gray-600">Ropa limpia en 24-48h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Zona de Servicio */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="text-indigo-600" size={24} />
            <h3 className="text-2xl font-bold">Zona de Servicio</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Actualmente operamos en <strong>Madrid Centro</strong>:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <Check className="text-green-500" size={20} />
              Centro, Sol, Gran Vía
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500" size={20} />
              Malasaña, Chueca
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500" size={20} />
              Salamanca, Retiro
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500" size={20} />
              Chamberí, Argüelles
            </li>
          </ul>
        </div>
      </section>
    </div>
  );

  // Página de servicios
  const ServiciosPage = () => (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-indigo-600 hover:text-indigo-800"
            >
              ← Volver
            </button>
            <div className="flex items-center gap-2">
              <Sparkles className="text-indigo-600" size={32} />
              <h1 className="text-2xl font-bold text-indigo-600">LavaExpress Madrid</h1>
            </div>
          </div>
          <button 
            onClick={() => setShowCart(!showCart)}
            className="relative bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-2"
          >
            <ShoppingCart size={20} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Nuestros Servicios</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {servicios.map(servicio => (
            <div key={servicio.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{servicio.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{servicio.nombre}</h3>
                    <p className="text-gray-600 text-sm">{servicio.descripcion}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-indigo-600">{servicio.precio}€</span>
                  <span className="text-gray-500 text-sm ml-2">{servicio.unidad}</span>
                </div>
                <button 
                  onClick={() => addToCart(servicio)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                >
                  Añadir
                </button>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Datos de Recogida</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nombre completo *</label>
                  <input 
                    type="text"
                    required
                    value={orderForm.nombre}
                    onChange={(e) => setOrderForm({...orderForm, nombre: e.target.value})}
                    className="w-full border rounded-lg px-4 py-2"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input 
                    type="email"
                    required
                    value={orderForm.email}
                    onChange={(e) => setOrderForm({...orderForm, email: e.target.value})}
                    className="w-full border rounded-lg px-4 py-2"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Teléfono *</label>
                  <input 
                    type="tel"
                    required
                    value={orderForm.telefono}
                    onChange={(e) => setOrderForm({...orderForm, telefono: e.target.value})}
                    className="w-full border rounded-lg px-4 py-2"
                    placeholder="600 123 456"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Dirección completa *</label>
                  <input 
                    type="text"
                    required
                    value={orderForm.direccion}
                    onChange={(e) => setOrderForm({...orderForm, direccion: e.target.value})}
                    className="w-full border rounded-lg px-4 py-2"
                    placeholder="Calle Gran Vía 28, 3ºA"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Fecha de recogida *</label>
                  <input 
                    type="date"
                    required
                    value={orderForm.fecha}
                    onChange={(e) => setOrderForm({...orderForm, fecha: e.target.value})}
                    className="w-full border rounded-lg px-4 py-2"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Hora de recogida *</label>
                  <select 
                    required
                    value={orderForm.hora}
                    onChange={(e) => setOrderForm({...orderForm, hora: e.target.value})}
                    className="w-full border rounded-lg px-4 py-2"
                  >
                    <option value="">Selecciona hora</option>
                    <option value="9-11">9:00 - 11:00</option>
                    <option value="11-13">11:00 - 13:00</option>
                    <option value="13-15">13:00 - 15:00</option>
                    <option value="15-17">15:00 - 17:00</option>
                    <option value="17-19">17:00 - 19:00</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Notas adicionales (opcional)</label>
                <textarea 
                  value={orderForm.notas}
                  onChange={(e) => setOrderForm({...orderForm, notas: e.target.value})}
                  className="w-full border rounded-lg px-4 py-2"
                  rows="3"
                  placeholder="Instrucciones especiales, código portal, etc."
                />
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Total del pedido:</span>
                  <span className="text-2xl font-bold text-indigo-600">{totalCart}€</span>
                </div>
                <p className="text-sm text-gray-600">Se procesará el pago de forma segura</p>
              </div>

              <button 
                type="button"
                onClick={handleSubmitOrder}
                className="w-full bg-indigo-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700"
              >
                Confirmar y Pagar {totalCart}€
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Página de confirmación
  const ConfirmacionPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl w-full">
        <div className="text-center mb-6">
          <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <Check className="text-green-600" size={48} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">¡Pedido Confirmado!</h2>
          <p className="text-gray-600">Hemos recibido tu solicitud correctamente</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="font-bold mb-4">Resumen del pedido:</h3>
          <div className="space-y-2 mb-4">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between">
                <span>{item.nombre} x{item.cantidad}</span>
                <span className="font-semibold">{item.precio * item.cantidad}€</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-2 flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span className="text-indigo-600">{totalCart}€</span>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h3 className="font-bold mb-2 flex items-center gap-2">
            <Clock size={20} className="text-blue-600" />
            Detalles de recogida:
          </h3>
          <p className="text-gray-700"><strong>Fecha:</strong> {orderForm.fecha}</p>
          <p className="text-gray-700"><strong>Hora:</strong> {orderForm.hora}</p>
          <p className="text-gray-700"><strong>Dirección:</strong> {orderForm.direccion}</p>
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-600">
            Te hemos enviado un email de confirmación a <strong>{orderForm.email}</strong>
          </p>
          <p className="text-gray-600">
            Nuestro equipo pasará a recoger tu ropa en el horario indicado.
          </p>
          <button 
            onClick={() => {
              setCurrentPage('home');
              setCart([]);
              setOrderForm({
                nombre: '',
                email: '',
                telefono: '',
                direccion: '',
                fecha: '',
                hora: '',
                notas: ''
              });
              setOrderComplete(false);
            }}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );

  // Carrito flotante
  const CartSidebar = () => (
    showCart && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setShowCart(false)}>
        <div 
          className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-6 overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Tu Carrito</h3>
            <button onClick={() => setShowCart(false)}>
              <X size={24} />
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">Tu carrito está vacío</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{item.nombre}</h4>
                        <p className="text-sm text-gray-600">{item.precio}€ {item.unidad}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                          className="bg-gray-200 w-8 h-8 rounded hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-semibold">{item.cantidad}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                          className="bg-gray-200 w-8 h-8 rounded hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-bold">{item.precio * item.cantidad}€</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mb-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-indigo-600">{totalCart}€</span>
                </div>
              </div>

              <button 
                onClick={() => {
                  setShowCart(false);
                  setCurrentPage('servicios');
                }}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
              >
                Proceder al Pedido
              </button>
            </>
          )}
        </div>
      </div>
    )
  );

  return (
    <>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'servicios' && <ServiciosPage />}
      {currentPage === 'confirmacion' && <ConfirmacionPage />}
      <CartSidebar />
    </>
  );
}