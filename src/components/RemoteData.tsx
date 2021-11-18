import React, {ReactNode} from 'react';
import {ViewState} from '../store/ViewState';
import {EmptyView} from './EmptyView';
import {ErrorView} from './ErrorView';
import {LoadingView} from './LoadingView';
import {View} from './View';

export function RemoteData(props: {
  viewState: ViewState;
  renderData: () => ReactNode;
}) {
  const content = () => {
    switch (props.viewState) {
      case ViewState.Data: {
        return props.renderData();
      }

      case ViewState.Empty: {
        return <EmptyView />;
      }

      case ViewState.Error: {
        return <ErrorView />;
      }

      case ViewState.Loading: {
        return <LoadingView />;
      }
    }
  };

  return <View>{content()}</View>;
}
