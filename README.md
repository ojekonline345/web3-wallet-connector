  # 🔗 web3-wallet-connector  
  Tool open-source untuk menghubungkan dompet kripto (MetaMask, TrustWallet, dll) ke aplikasi web3 dengan mudah.

  ## ✨ Fitur
  - Deteksi otomatis provider Ethereum
  - Tampilkan alamat dompet pengguna
  - Tampilkan saldo ETH
  - Dukungan multi-rantai (Ethereum, BSC, Polygon)

  ## 🚀 Cara Pakai
  1. Tambahkan script di HTML:
  ```html
  <script src="https://cdn.jsdelivr.net/gh/ojekonline345/web3-wallet-connector@main/app.js"></script>
  ```

  2. Tambahkan elemen UI:
  ```html
  <button id="connectWalletBtn">Connect Wallet</button>
  <div id="walletInfo"></div>
  ```

  3. Tambahkan kode JavaScript berikut:
  ```javascript
  document.getElementById('connectWalletBtn').addEventListener('click', async () => {
    try {
      const connector = new Web3Connector();
      const wallet = await connector.connect();
      
      if(wallet) {
        document.getElementById('walletInfo').innerHTML = `
          <p>Address: ${wallet.address}</p>
          <p>Balance: ${wallet.balance} ETH</p>
        `;
      }
    } catch (error) {
      console.error("Wallet connection failed:", error);
      alert("Failed to connect wallet. Please install MetaMask!");
    }
  });
  ```

  ## 👨‍💻 Contoh Kode (app.js)
  Berikut adalah kode lengkap untuk file `app.js`:
  ```javascript
  class Web3Connector {
    async connect() {
      if (typeof window.ethereum === 'undefined') {
        throw new Error("Ethereum provider not found!");
      }
      
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      const address = accounts;
      const balance = await this.getBalance(address);
      
      return { address, balance };
    }

    async getBalance(address) {
      const balance = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [address, 'latest']
      });
      return (parseInt(balance) / 1e18).toFixed(4);
    }
  }
  ```

  ## 🌐 Demo
  [Lihat Demo Langsung](https://ojekonline345.github.io/web3-wallet-connector)

  ## 🤝 Berkontribusi
  ... (contribution steps)
