# Coolert

A lightweight alert and confirm library for reactjs and nextjs using Tailwind and Storybook

## Preview
![Screenshot 2567-02-08 at 01 49 20](https://github.com/ppenter/coolert/assets/55227490/8109b655-1347-4c83-8d8c-be652d1e22de)


## Getting Started

```bash
yarn add coolert
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
