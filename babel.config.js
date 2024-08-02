module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'defaults'}}], // changed current -> defaults
      ['@babel/preset-react', {runtime: "automatic"}]
    ],
  };
