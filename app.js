class Web3Connector {
  async connect() {
    // 1. Cek apakah provider Ethereum (MetaMask/TrustWallet) terdeteksi
    if (typeof window.ethereum === 'undefined') {
      throw new Error("Ethereum provider tidak ditemukan!");
    }
    
    // 2. Minta izin akses dompet pengguna
    const accounts = await window.ethereum.request({ 
      method: 'eth_requestAccounts' 
    });
    
    // 3. Ambil alamat dompet (indeks pertama)
    const address = accounts;
    
    // 4. Dapatkan saldo ETH
    const balance = await this.getBalance(address);
    
    // 5. Kembalikan data dompet
    return { address, balance };
  }

  async getBalance(address) {
    // 6. Request saldo dari blockchain
    const balance = await window.ethereum.request({
      method: 'eth_getBalance',
      params: [address, 'latest']
    });
    
    // 7. Konversi dari wei ke ETH (1 ETH = 10^18 wei)
    return (parseInt(balance) / 1e18).toFixed(4);
  }
}
