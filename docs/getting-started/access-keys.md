---
sidebar_position: 2
---

# Understanding Access Keys in NEAR Protocol

Full Access vs Limited Access Keys

In the NEAR Protocol, access keys are essential for managing permissions and controlling access to your account. There are two main types of access keys: **Full Access Keys** and **Limited Access Keys**. Here’s a breakdown of the differences between them and what happens when an access key is deleted.

### **Full Access Keys**

-   **Permissions**: Full Access Keys have complete control over the account. This means they can perform any action, including transferring tokens, staking, and changing account settings.
    
-   **Usage**: Typically, Full Access Keys are used by the account owner and are stored securely. They are often associated with a private key that should be kept confidential.
    
:::warning
    
If a Full Access Key is compromised, the attacker can take full control of the account and perform any actions, including transferring all assets out of the account.

:::

### **Limited Access Keys**

-   **Permissions**: Limited Access Keys have restricted permissions and can only perform specific actions defined at the time of their creation. For example, they might be allowed to call specific smart contracts or perform non-financial transactions.
    
-   **Usage**: These keys are useful for delegating certain actions to applications or services without giving them full control over your account.
    

:::warning

Limited Access Keys provide a way to enhance security by limiting the actions that can be performed with the key, reducing the risk if the key is compromised.

:::

### What Happens When an Access Key is Deleted?

-   **Full Access Key Deletion**: When a Full Access Key is deleted, all permissions associated with that key are revoked. If this was the only Full Access Key for the account, you would lose complete control over the account, making it impossible to perform any actions, including accessing or transferring tokens.
    
-   **Limited Access Key Deletion**: Deleting a Limited Access Key removes the specific permissions it granted. This means that any application or service relying on that key will no longer be able to perform the actions it was previously allowed to do.
    
-   **Security Implications**: Deleting access keys can be a security measure to prevent unauthorized access, but it also means that any actions or permissions associated with the deleted key are permanently lost.
    

### Practical Implications

If you find that your access keys have been deleted:

-   **Full Access Key Deleted**: If you have no other Full Access Keys linked to your account, you will not be able to access or control your account anymore. This includes transferring tokens, accessing assets, or managing account settings.
    
-   **Limited Access Key Deleted**: You will lose the ability to perform the specific actions that were permitted by that key. However, you can still manage your account with other Full Access Keys, if available.
