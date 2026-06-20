'use client';

import { useForm, ValidationError } from '@formspree/react';

export const ContactSection = () => {
  const [state, handleSubmit] = useForm('xwvjgaee');

  return (
    <section
      id="contact"
      className="text-white"
      style={{ backgroundColor: '#800202', paddingLeft: '8vw', paddingRight: '8vw', paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      <h2
        className="mb-12"
        style={{
          fontSize: 'clamp(28px, 4vw, 40px)',
          fontWeight: 700,
          fontFamily: 'var(--font-serif)',
        }}
      >
        お気軽にお問い合わせください。
      </h2>

      {state.succeeded ? (
        <p>ありがとうございます。メッセージを受け取りました。</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="mb-1 block"
              style={{ fontSize: '0.75rem', letterSpacing: '0.1em', opacity: 0.7 }}
            >
              お名前
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full bg-transparent border-b border-white/40 text-white py-3 outline-none focus:border-white"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-1 block"
              style={{ fontSize: '0.75rem', letterSpacing: '0.1em', opacity: 0.7 }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full bg-transparent border-b border-white/40 text-white py-3 outline-none focus:border-white"
            />
            <ValidationError field="email" errors={state.errors} />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-1 block"
              style={{ fontSize: '0.75rem', letterSpacing: '0.1em', opacity: 0.7 }}
            >
              内容
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full bg-transparent border-b border-white/40 text-white py-3 outline-none focus:border-white"
            />
            <ValidationError field="message" errors={state.errors} />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-white px-8 py-3"
            style={{ color: '#800202', fontWeight: 700 }}
          >
            送信する
          </button>
        </form>
      )}

      <p className="mt-8" style={{ fontSize: '0.75rem', opacity: 0.6 }}>
        通常、24時間以内にお返事いたします。海外ベースのため、メールを中心としたやりとりになりますことを、ご了承ください。
      </p>
    </section>
  );
};
