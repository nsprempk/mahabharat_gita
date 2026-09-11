import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import useAuth from "../hooks/useAuth";

export default function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      name,
      email,
    });

    navigate("/");
  };

  return (
    <section className="mx-auto flex max-w-md justify-center px-4 py-16">
      <div className="w-full rounded-3xl border border-saffron-100 bg-white p-8 shadow-spiritual">
        <div className="text-center">
          <div className="text-4xl text-saffron-500">ॐ</div>

          <h1 className="mt-3 text-2xl font-bold text-spiritual-brown">
            Create Account
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold">Name</label>

            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-saffron-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">Email</label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-saffron-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">Password</label>

            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-saffron-400"
            />
          </div>

          <button className="w-full rounded-full bg-saffron-500 py-3 font-bold text-white hover:bg-saffron-600">
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-stone-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-saffron-600">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
