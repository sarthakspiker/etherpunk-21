# EtherPunk-21

Peer to peer real estate rental agreement between two parties.

Moving rental agreement between house owners and renter in Real Estate to blockchain hence cutting the cost of the middlemen such as broker fees.

## Backend

• Database 1. Contract 2. Real-estate
a. Images
b. Details 3. Party

• Proceed (Both party agreed)
• Transaction 1. Create E-Contract 2. Sign Digitally 3. Store

## Problem

    • Making Real Estate Rental free from middlemen.

## Idea

    • Connect renter and owner by eliminating the middle and establishing a structured and trustworthy process of Renting Real Estate.
    • Owner will be able to advertise their property details on website-name
    • Renter can go through the listings and connect with the owner or can comment his queries
    • When both parties are in agreement then our service kicks in to automate the further process of creating a digital rental contract
    • Owner goes to his property listing, selects the chosen property and books it with renter's Id
    • Remove the newly booked property from open listings

## Features

    • Transaction Management
    	○ Account
    	○ Payment Summary
    	○ Contract Details
    • Zero Knowledge Proofs verification system
    • Property
    • Comment
    • Contact
    • Paginated View (Catalog)
    • Images

## To-do

    • Research on Digital Rent Contracts, how things are being carried out now digitally?
    • Research about Payment process for Ethereum or Link.
    • Zero Knowledge Proofs

## Frontend

    1. Dashboard
    2. Contact
    3. Owner

## How to store contract

    1. Convert contract into ERC721 (NFT) token
    2. Using owner's and customer details

## Problems:

    • User needs to have a Metamask / Brave browser in order to commit transaction.
    	○ Either use KeyStore to save user's private key in backend or bring all the transactions to frontend
    • How can we tackle market instability in deciding the value of Asset.
    	○ Stable Coin
    • Is it a good idea to convert real estate in tokens? If yes, then how are we supposed to convert into token?
    • How do we settle dispute?
    • Is storing contract on Blockchain good idea? Because it ma be expensive in terms of storage?
    • How do go about the legal side of agreement? Since this is  real estate, govt is likely to involve in registration, taxes etc., how do we manage that?
    • How to store images inside Solidity struct? Can I use Chainlink in this process somehow?
