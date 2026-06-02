'use client';

import Image from 'next/image';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';

const contactInfo = {
  name: 'Vishesh Vikram Singh',
  emailPersonal: 'visheshvscontact@gmail.com',
  emailWork: 'vishesh@activeestimating.com',
  phone: '+15108331422',
  location: 'Oakland, CA',
  website: 'https://visheshvs.com/card',
  studiaMedio: 'https://visheshvs.com/',
  instagram: 'https://www.instagram.com/vvsishere/',
  linkedin: 'https://www.linkedin.com/in/visheshvikram/',
  github: 'https://github.com/visheshvs',
  substack: 'https://substack.com/@visheshvikramsingh',
  activeEstimating: 'https://activeestimating.com/',
};

const vcfContent = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  `FN:${contactInfo.name}`,
  'TITLE:Active Estimating',
  'PHOTO;VALUE=URI:https://visheshvs.com/images/studio/headshot.png',
  `EMAIL;TYPE=HOME,INTERNET:${contactInfo.emailPersonal}`,
  `EMAIL;TYPE=WORK,INTERNET:${contactInfo.emailWork}`,
  `TEL;TYPE=CELL:${contactInfo.phone}`,
  `URL;TYPE=WORK:${contactInfo.website}`,
  'END:VCARD',
].join('\n');

function downloadVcf() {
  const blob = new Blob([vcfContent], { type: 'text/vcard' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'VisheshVikramSingh.vcf';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }, 100);
}

export default function CardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-900 dark:to-stone-950 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-sm animate-fade-in">
        {/* Back link */}
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 text-sm transition-colors no-underline"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Studia Medio
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-stone-900 rounded-2xl overflow-hidden shadow-2xl">

          {/* Header */}
          <div className="px-6 pt-10 pb-8 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 55%, #533483 80%, #e94560 100%)' }}
          >
            {/* Radial glow */}
            <div className="absolute inset-0 opacity-30"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 70%)' }}
            />

            {/* Profile image */}
            <div className="relative z-10 mx-auto mb-5 w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
              <Image
                src="/images/studio/headshot.png"
                alt="Vishesh Vikram Singh"
                width={300}
                height={300}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Name */}
            <h1 className="relative z-10 text-white text-2xl font-serif font-normal tracking-wide mb-0">
              {contactInfo.name}
            </h1>
          </div>

          {/* Body */}
          <div className="px-6 py-6 space-y-6">

            {/* Contact info */}
            <div>
              <p className="text-xs font-sans font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-3 border-b border-stone-100 dark:border-stone-800 pb-2">
                Contact
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-stone-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <div className="flex flex-col gap-0.5">
                    <a href={`mailto:${contactInfo.emailPersonal}`} className="text-stone-700 dark:text-stone-300 text-sm no-underline hover:text-stone-900 dark:hover:text-stone-100 transition-colors font-sans">
                      {contactInfo.emailPersonal}
                    </a>
                    <a href={`mailto:${contactInfo.emailWork}`} className="text-stone-500 dark:text-stone-400 text-sm no-underline hover:text-stone-900 dark:hover:text-stone-100 transition-colors font-sans">
                      {contactInfo.emailWork}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-stone-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-stone-700 dark:text-stone-300 text-sm font-sans">{contactInfo.location}</span>
                </li>
              </ul>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-sans font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-3 border-b border-stone-100 dark:border-stone-800 pb-2">
                Find Me Online
              </p>
              <div className="flex gap-3 flex-wrap">
                {/* LinkedIn */}
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-800 hover:text-white dark:hover:bg-stone-200 dark:hover:text-stone-900 transition-all no-underline"
                  title="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 00.1.42V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-800 hover:text-white dark:hover:bg-stone-200 dark:hover:text-stone-900 transition-all no-underline"
                  title="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                {/* GitHub */}
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-800 hover:text-white dark:hover:bg-stone-200 dark:hover:text-stone-900 transition-all no-underline"
                  title="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>

                {/* Substack */}
                <a href={contactInfo.substack} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-800 hover:text-white dark:hover:bg-stone-200 dark:hover:text-stone-900 transition-all no-underline"
                  title="Substack"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              <a
                href={contactInfo.activeEstimating}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 px-4 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-xl text-sm font-sans font-semibold no-underline hover:bg-stone-700 dark:hover:bg-stone-300 transition-colors"
              >
                Active Estimating
              </a>
              <a
                href={contactInfo.studiaMedio}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 px-4 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 rounded-xl text-sm font-sans font-semibold no-underline hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
              >
                Visit Studia Medio
              </a>
            </div>

            {/* QR code */}
            <div className="flex flex-col items-center pt-2 pb-2">
              <p className="text-xs font-sans font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-4">
                Scan to save contact
              </p>
              <div className="p-3 bg-white rounded-xl shadow-sm border border-stone-100">
                <QRCodeSVG
                  value={vcfContent}
                  size={160}
                  fgColor="#1c1917"
                  bgColor="#ffffff"
                  level="M"
                />
              </div>
              <button
                onClick={downloadVcf}
                className="mt-4 px-5 py-2 text-sm font-sans font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg transition-colors border-0 cursor-pointer"
              >
                Download Contact (.vcf)
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-stone-50 dark:bg-stone-800/50 border-t border-stone-100 dark:border-stone-800 text-center">
            <p className="text-xs font-sans text-stone-400 dark:text-stone-500 m-0">Studia Medio — Between ideas and form</p>
          </div>
        </div>
      </div>
    </main>
  );
}
