# ink! ERC-721 Implementation

> [!NOTE]
> It is based on [use-ink/ink-examples](https://github.com/use-ink/ink-examples/tree/main/erc721)

## Overview

This is an implementation of the ERC-721 Non-Fungible Token (NFT) standard using ink! smart contract language for the Polkadot/Substrate ecosystem. The contract provides functionality for creating, managing, and transferring unique tokens on the blockchain.

⚠️ **Warning**: This contract is for demonstration purposes and has not been audited. Do not use it in production without proper security review.

## Features

- Mint new unique tokens
- Transfer tokens between accounts
- Approve specific accounts to transfer tokens
- Set operators with broader transfer rights
- Burn (destroy) tokens
- Manage token metadata URIs
- Query token ownership and balances

## Contract Structure

The contract maintains several key mappings:
- `token_owner`: Maps token IDs to their owners
- `token_approvals`: Maps tokens to approved transfer addresses
- `owned_tokens_count`: Tracks how many tokens each address owns
- `operator_approvals`: Tracks approved operators for owners
- `contract_uri`: Stores contract-level metadata URI
- `base_uri`: Stores base URI for token metadata

## Getting Started

### Prerequisites

- Rust and Cargo installed
- ink! toolchain set up
- A Substrate-based chain supporting ink! contracts

### Building the Contract

```bash
cargo contract build
```

### Running Tests

```bash
cargo test
```

## Usage Examples

When you are ready to deploy 

```bash 
cargo contract build --release
```


### Creating a New Token

```rust
// Initialize contract
let mut erc721 = Erc721::new();

// Mint a new token with ID 1
erc721.mint(1)?;
```

### Transferring Tokens

```rust
// Direct transfer by owner
erc721.transfer(recipient_account, token_id)?;

// Transfer using approval
erc721.transfer_from(from_account, to_account, token_id)?;
```

### Setting Approvals

```rust
// Approve single token transfer
erc721.approve(operator_account, token_id)?;

// Approve all tokens
erc721.set_approval_for_all(operator_account, true)?;
```

## API Reference

### Query Methods

#### `balance_of(owner: AccountId) -> u32`
Returns the number of tokens owned by an account.

#### `owner_of(id: TokenId) -> Option<AccountId>`
Returns the owner of a specific token.

#### `get_approved(id: TokenId) -> Option<AccountId>`
Returns the approved account for a token.

#### `is_approved_for_all(owner: AccountId, operator: AccountId) -> bool`
Checks if an operator is approved for all tokens of an owner.

#### `get_contract_uri() -> Option<String>`
Returns the contract-level metadata URI.

#### `token_uri(id: TokenId) -> Option<(String, TokenId)>`
Returns the metadata URI for a specific token.

### Transaction Methods

#### `mint(id: TokenId) -> Result<(), Error>`
Creates a new token with the specified ID.

#### `burn(id: TokenId) -> Result<(), Error>`
Destroys an existing token (only callable by owner).

#### `transfer(destination: AccountId, id: TokenId) -> Result<(), Error>`
Transfers a token to a new owner.

#### `approve(to: AccountId, id: TokenId) -> Result<(), Error>`
Approves an account to transfer a specific token.

#### `set_approval_for_all(to: AccountId, approved: bool) -> Result<(), Error>`
Approves or revokes an operator for all tokens.

#### `set_base_uri(uri: Option<String>) -> Result<(), Error>`
Sets the base URI for token metadata.

#### `set_contract_uri(uri: Option<String>) -> Result<(), Error>`
Sets the contract-level metadata URI.

## Error Handling

The contract defines several error types:
- `NotOwner`: Operation requires token ownership
- `NotApproved`: Caller not approved for operation
- `TokenExists`: Token ID already exists
- `TokenNotFound`: Token ID does not exist
- `CannotInsert`: Failed to insert new data
- `CannotFetchValue`: Failed to fetch existing data
- `NotAllowed`: Operation not permitted

## Events

The contract emits the following events:

### `Transfer`
Emitted when a token is transferred, including minting and burning.
- `from`: Previous owner (None for minting)
- `to`: New owner (None for burning)
- `id`: Token ID

### `Approval`
Emitted when a token is approved for transfer.
- `from`: Token owner
- `to`: Approved account
- `id`: Token ID

### `ApprovalForAll`
Emitted when an operator is approved/disapproved.
- `owner`: Token owner
- `operator`: Operator account
- `approved`: Approval status

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Testing

The contract includes comprehensive unit tests covering:
- Token minting
- Token transfers
- Approval management
- Error conditions
- Edge cases

Run the tests using:

```bash
cargo test
```
