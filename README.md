z

# oopsum Crypto Trading Platform - Figma Slicing

## Introduction

This repository contains the sliced design implementation of the "oopsum Crypto Trading Platform" as per the Figma design created by [Kuldeep Jilyani](https://www.figma.com/community/file/1259776540007423754/Crypto-Trading-Platform---Web3). The design layout of this project is developed with a size of 1440x1024. This project is intended to provide an optimal visual experience when viewed at this wide resolution or higher. The project is built using Next.js, Tailwind CSS and Cryptocurrency Data API from [CoinGecko](https://www.coingecko.com/en/api/documentation).

## Table of Contents

[Introduction](#Introduction)

## Live Production

To view a live demo of the oopsum Crypto Trading Platform, please visit link_to_live_demo.

## Installation

Follow the steps below to set up the project locally on your machine:

Clone the repository:

```bash
    git clone https://github.com/your_username/oopsum-crypto-trading-platform.git
    cd oopsum-crypto-trading-platform
```

Install the required dependencies:

```bash
    npm install
    # or
    yarn install
```

## Usage

After installing the dependencies, you can run the development server locally by using the following command:

```javascript
    npm run dev
    # or
    yarn dev
```

Visit http://localhost:3000 in your web browser to see the application.

## Tech Stack

The project is built using the following technologies:

Next.js, Tailwind CSS

## Data from CoinGecko API

The oopsum Crypto Trading Platform fetches data from the [CoinGecko](https://www.coingecko.com/en/api/documentation) public API to display the following information:

### Top Coins

The top coins are fetched from the CoinGecko API and displayed with their respective names, symbols, market prices, logo, and ATL to current price percentage.

### Trending Coins

The trending coins are obtained from the CoinGecko API based on their recent popularity and displayed accordingly.

### NFT (Non-Fungible Tokens)

Information about Non-Fungible Tokens (NFTs) is retrieved from the CoinGecko API and shown along with relevant details.

To access the CoinGecko API and fetch the required data, the project uses the axios library or any other suitable library.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to create a pull request or open an issue.

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Submit a pull request.

## License

The oopsum Crypto Trading Platform is open-source software licensed under the MIT License. Feel free to use, modify, and distribute the code as per the terms of the license.
