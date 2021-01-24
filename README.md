# dollys-revenge

Minecraft 1.16 datapack that everyone needs.

## How to install

1. Download the [datapack zip file](https://github.com/MrKiplin/dollys-revenge/raw/main/dist/dollys-revenge-v1.0.1.zip)
2. On the world selection screen, select your world and click "Edit".
3. Click "Open World Folder".
4. Place the datapack zip file in the `datapacks` folder.
5. Start your world. If it doesn't work, using the command `/reload`.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

To get up and running, you will need the following tools.

### Code

To write and test code you will need [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/lang/en/) installed. If your on a Mac, use [Homebrew](https://docs.brew.sh/Installation) for installation.

```
brew install node
brew install yarn
```

### Installing

Change to the root directory and install dependencies.

```
yarn
```

### Building

To build the data pack, run the following command that will update the `.zip` file in the `dist` folder. This file can then be dropped into a worlds `datapacks` folder. The version number will be pulled from `package.json`:

```
yarn build
```

## Authors

![](docs/mrkiplin-icon.gif)

- **Theodore Jones** - [MrKiplin](https://github.com/MrKiplin)
