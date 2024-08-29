---
sidebar_position: 4
---

# FastAuth Recovery via Email

Recover FastAuth Account via Email Recovery

If you have and email titled **"Important: Near Wallet Recovery Email for XXX.near**" and you have clicked on the "Recover my Account" link in the email and it directed you to the general NEAR page, follow these steps to recover your FastAuth account using your email:

### Steps to Recover Your Account

1.  **Go to MyNearWallet:**
    
    -   Navigate to [MyNearWallet](https://app.mynearwallet.com/).
        
2.  **Import Existing Account:**
    
    -   Click on the "Import Existing Account" option.
        
3.  **Create a Password:**
    
    -   Create a new password and ensure you remember it.
        
4.  **Select Passphrase:**
    
    -   Choose the "Passphrase" option.
        

![](https://staticfiles.gleap.io/ghelparticle/AWBILfSpE7C2O4ls4oEWiPBMtNi0Ikmw82mnGUJmN38eVUZqdHUTbboJQxnN29Tj0LvimvuKKXF.png)

5.  **Enter Recovery Passphrase:**
    
    -   Type the recovery passphrase from the URL you received in your email.
        

### Detailed Guide for Recovery

-   **URL Format:**
    
    -   The URL format for recovery is: `https://wallet.near.org/recover-with-link/[accountId]/[passphrase]`.
        
-   **Decoding the Passphrase:**
    
    -   The passphrase in the URL is encoded with `%20` representing spaces between words (e.g., `word1%20word2%20`).
        
    -   Replace the `%20` with a space to obtain the correct passphrase (e.g., `word1 word2`).
        

Using the recovery URL, you should be able to access your account on MyNearWallet.
