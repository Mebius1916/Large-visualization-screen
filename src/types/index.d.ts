declare type MapType = '3D' | 'GIS' | 'VIG';

type VideoInstance = import('./../components/Video/index').default;

interface Props {
  src: string,
  title?: string
}

interface Window {
  videoInstance: VideoInstance;
}

declare var videoInstance: Window['videoInstance'];