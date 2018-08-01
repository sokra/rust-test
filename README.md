# rust-test

## Installing the rust toolchain

```
rustup toolchain install nightly
rustup default nightly
rustup target add wasm32-unknown-unknown
cargo install wasm-bindgen-cli
```

## Installing dependencies

```
yarn
```

## Doing the build

```
yarn build
```

First build may take really long, because cargo will install and build dependencies in the rust projects.