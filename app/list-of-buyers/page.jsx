'use client';
import React from 'react';
import '../css/list-of-buyers.css';
import Navbar from '../components/navbar';
import Socials from '../components/socials';
import Image from 'next/image';


export default function ListOfBuyers() {
  return (
    <div>
      <Navbar />
      <Socials />

      <div className="buyers-main">
        <div className="buyers-left">
          <h1 className="buyers-title">List of Buyers</h1>
          <p className="buyers-desc">
            Access the comprehensive database of verified buyers across various sectors. For your convenience, 
            the list is available for download in Excel format, allowing easy offline reference and analysis.
          </p>

          <div className="buyers-card">
            <h2 className="buyers-card-title">📂 Buyers Data</h2>
            <p className="buyers-card-text">Download the latest buyers list in Excel format.</p>
            <a href="/buyers/buyers.xlsx" download className="download-btn">
              ⬇ Download Excel
            </a>
          </div>

          {/* New Section */}
          <div className="buyers-meets">
            <h2 className="buyers-meets-title">Buyer-Seller Meets held by Kabco</h2>
            <div className="buyers-meets-gallery">
              <div className="buyers-meets-item">
                <Image
                  src="/buyers/kochi-summit.jpg"
                  alt="Kochi Summit"
                  width={220}
                  height={160}
                />
                <p>Kochi Summit</p>
              </div>
              <div className="buyers-meets-item">
                <Image
                  src="/buyers/kozhikode-fpo-mela.jpeg"
                  alt="Kozhikode FPO Mela"
                  width={220}
                  height={160}
                />
                <p>Kozhikode FPO Mela</p>
              </div>
              <div className="buyers-meets-item">
                <Image
                  src="/buyers/thrissur-assocham.jpg"
                  alt="Thrissur ASSOCHAM Event"
                  width={220}
                  height={160}
                />
                <p>Thrissur ASSOCHAM Event</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
