# Coolert

A lightweight alert and confirm library for reactjs and nextjs using Tailwind and Storybook

## Getting Started

```bash
yarn add coolert-react
```

## Usage

### coolert

Alert component

```bash
 coolert({
  title: 'Alert',
  description: 'This is description',
  type: 'info',
 });
```

### Coolfirm

Confirm component

```bash
 coolfirm({
   title: 'Confirm',
   description: '',
   type: 'info',
   onConfirm: (value) => {
         console.log("Confirm: ", value);
      },
   onCancel: () => {
         console.log("Cancel");
      },
   });
```

## Built With

- [Vite](https://vitejs.dev/) - The web framework used

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
