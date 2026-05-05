"use client";
import { useEffect, useState } from 'react';
import { getTransactions } from '@/services/api';
import { motion } from 'framer-motion';
import { CreditCard, CheckCircle2, Clock, User } from 'lucide-react';

interface Transaction {
  reference: string;
  receiver_name: string;
  sender_name: string;
  amount: string;
  status: string;
}

export default function LiveTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTransactions().then((data: Transaction[]) => {
      setTransactions(data || []);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-slate-500 font-mono text-[10px] p-10 uppercase tracking-widest text-center">Initialising_Secure_Relay...</div>;

  const scrollData = [...transactions, ...transactions];

  return (
    <div className="w-full mt-32 border-t border-slate-900/50 pt-20">
    <div className="flex items-center justify-between mb-10 px-2">
        <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
            <h2 className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em]">Live_Ledger_Stream</h2>
        </div>
        <div className="text-[9px] font-mono text-slate-700 uppercase tracking-tighter">
          Nodes_Active: 04 // Sync_Stable
        </div>
    </div>  
      
      <div className="relative w-full overflow-hidden">
        <div className="animate-custom-marquee flex gap-8 py-4">
          {scrollData.map((tx, index) => (
            <div key={`${tx.reference}-${index}`} className="flex-shrink-0 w-[320px]">
              <div className="bg-[#fcfcfc] rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden relative">
                
                {/* Receipt Header */}
                <div className="bg-blue-600 px-6 py-5 text-white">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] font-mono tracking-[0.2em] opacity-70 uppercase text-white/90">PayFusion_Receipt</span>
                    <CreditCard size={14} className="opacity-50" />
                  </div>
                  
                  <h3 className="text-3xl font-bold tracking-tight">
                    ₦{Number(tx.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </h3>
                </div>

                {/* Receipt Body */}
                <div className="p-6 space-y-6 bg-white">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[8px] uppercase text-slate-400 font-black tracking-widest mb-1 block">Recipient</span>
                      <p className="text-base font-bold text-slate-900 flex items-center gap-2 uppercase tracking-tight">
                        <User size={14} className="text-blue-600" /> {tx.receiver_name}
                      </p>
                    </div>

                    {/* Divider with forced border style to override global.css reset */}
                    <div className="pt-4" style={{ borderTop: '1px dashed #e2e8f0', borderStyle: 'dashed none none none' }}>
                      <span className="text-[8px] uppercase text-slate-400 font-black tracking-widest mb-1 block">Originator</span>
                      <p className="text-sm font-medium text-slate-500 italic">via {tx.sender_name}</p>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between items-end" style={{ borderTop: '1px solid #f1f5f9' }}>
                    <div className="space-y-1">
                      <p className="text-[9px] font-mono text-slate-500 uppercase">REF: {tx.reference.substring(0, 12)}</p>
                      <p className="text-[8px] font-mono text-slate-300 uppercase italic">TS_RELAY: {new Date().toLocaleTimeString()}</p>
                    </div>

                    <div className={`flex items-center gap-1 px-3 py-1 rounded-full border shadow-sm ${
                      tx.status === 'completed' 
                      ? 'bg-green-50 border-green-100 text-green-700' 
                      : 'bg-amber-50 border-amber-100 text-amber-700'
                    }`} style={{ borderStyle: 'solid' }}>
                      {tx.status === 'completed' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                      <span className="text-[9px] font-black uppercase tracking-tighter">{tx.status}</span>
                    </div>
                  </div>
                </div>

                {/* Jagged Bottom Edge */}
                <div className="h-2 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCA1IiBmaWxsPSIjZmNmY2ZjIj48cG9seWdvbiBwb2ludHM9IjAsNSAyMCw1IDEwLDAiLz48L3N2Zz4=')] bg-repeat-x bg-[length:15px_5px] absolute -bottom-0.5 transform rotate-180" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}