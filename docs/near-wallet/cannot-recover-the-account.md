---
sidebar_position: 3
---

# Cannot Recover the Account

NEAR Wallet account recovery

### Account Recovery in NEAR Wallet: User Responsibility

It's crucial to understand that account recovery on the NEAR blockchain is entirely within the user's control, as NEAR Wallet is non-custodial, meaning no one else has custody of your account or keys. If you encounter issues or errors during the account recovery process, such as the messages below:

```
No accounts were found for this seed phrase.
```

```
Can not sign transactions for account on network default, no matching pair found in InMemorySigner(InMemoryKeyStore).
```

You can create a recovery link for your wallet yourself. Here's how to do it:

Suppose your passphrase is, for instance, "test testing example demo hide work test hello issue test mind group," and the account you wish to recover is "near.near." In that case, you need to construct a recovery link using the following components:

1.  Base URL: [https://wallet.near.org/recover-with-link/](https://wallet.near.org/recover-with-link/)
    
2.  Account Name: near.near/
    
3.  Seed Phrase (replace spaces with "%20" and make all words lowercase): test%20testing%20example%20demo%20hide%20work%20test%20hello%20issue%20test%20mind%20group
    

Combine these components to form the final recovery link, which will look like this:

**Recovery Link:** [https://wallet.near.org/recover-with-link/near.near/test%20testing%20example%20demo%20hide%20work%20test%20hello%20issue%20test%20mind%20group](https://wallet.near.org/recover-with-link/)

### Please note:

-   The example seed phrase "test%20testing%20example%20demo%20hide%20work%20test%20hello%20issue%20test%20mind%20group" is provided as a placeholder. Replace it with the words from your actual seed phrase.
    
-   "near.near" is given as an example account. Use the account you want to recover.
    
-   Ensure that the link includes a final slash, "space" between words is replaced with "%20," and all words are in lowercase.
    

If none of the above methods prove effective, NEAR Wallet does offer alternative recovery options, including email and SMS messages with a recovery link similar to the one described above. If you initially created your account using an email or SMS method instead of a seed phrase, attempt to recover your account using that link.

:::warning

**NEAR Wallet does not have access to your private keys, and in the unfortunate event that you lose access to your seed phrase or backup, there is no recourse for recovering access to your wallet. Security and responsibility for your account are firmly in your hands.**

:::
