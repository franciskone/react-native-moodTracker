import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export const addStore = (AppComponent, { store, persistor }) => () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <AppComponent />
      </PersistGate>
    </Provider>
  );
};
