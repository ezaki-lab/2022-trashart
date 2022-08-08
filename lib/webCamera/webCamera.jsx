import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle } from 'react';

const WebCamera = ({
  facingMode = 'user',
  aspectRatio = 'cover',
  numberOfCamerasCallback = () => null,
  errorMessages = {
    noCameraAccessible: '使用できるカメラがありません。他のブラウザーで試すか、カメラを追加してください。',
    permissionDenied: 'カメラの権限がないです。許可してください。',
    switchCamera: 'カメラを切り替えることができませんでした。',
    canvas: 'キャンバスはサポートされていません。',
  },
},
  ref,
) => {
  const player = useRef(null);
  const canvas = useRef(null);
  const container = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [stream, setStream] = useState(null);
  const [currentFacingMode, setFacingMode] = useState(facingMode);
  const [notSupported, setNotSupported] = useState(false);
  const [permissionDenied, setPermissionDenied] = useState(false);

  useEffect(() => {
    numberOfCamerasCallback(numberOfCameras);
  }, [numberOfCameras]);

  useImperativeHandle(ref, () => ({
    takePhoto: () => {
      if (numberOfCameras < 1) {
        throw new Error(errorMessages.noCameraAccessible);
      }

      if (canvas?.current) {
        const playerWidth = player?.current?.videoWidth || 1280;
        const playerHeight = player?.current?.videoHeight || 720;
        const playerAR = playerWidth / playerHeight;

        const canvasWidth = container?.current?.offsetWidth || 1280;
        const canvasHeight = container?.current?.offsetHeight || 1280;
        const canvasAR = canvasWidth / canvasHeight;

        let sX, sY, sW, sH;

        if (playerAR > canvasAR) {
          sH = playerHeight;
          sW = playerHeight * canvasAR;
          sX = (playerWidth - sW) / 2;
          sY = 0;
        } else {
          sW = playerWidth;
          sH = playerWidth / canvasAR;
          sX = 0;
          sY = (playerHeight - sH) / 2;
        }

        canvas.current.width = sW;
        canvas.current.height = sH;

        const context = canvas.current.getContext('2d');
        if (context && player?.current) {
          context.drawImage(player.current, sX, sY, sW, sH, 0, 0, sW, sH);
        }

        const imgData = canvas.current.toDataURL('image/jpeg');
        return imgData;
      } else {
        throw new Error(errorMessages.canvas);
      }
    },
    switchCamera: () => {
      if (numberOfCameras < 1) {
        throw new Error(errorMessages.noCameraAccessible);
      } else if (numberOfCameras < 2) {
        console.error('Error: Unable to switch camera. Only one device is accessible.'); // console only
      }
      const newFacingMode = currentFacingMode === 'user' ? 'environment' : 'user';
      setFacingMode(newFacingMode);
      return newFacingMode;
    },
    getNumberOfCameras: () => {
      return numberOfCameras;
    },
  }));

  useEffect(() => {
    initCameraStream(stream, setStream, currentFacingMode, setNumberOfCameras, setNotSupported, setPermissionDenied);
  }, [currentFacingMode]);

  useEffect(() => {
    if (stream && player && player.current) {
      player.current.srcObject = stream;
    }
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => {
          track.stop();
        });
      }
    };
  }, [stream]);

  return (
    <div
      className={
        aspectRatio === 'cover'
          ? 'absolute inset-0'
          : 'relative'
      }
      style={
        aspectRatio !== 'cover'
          ? { paddingBottom: 100 / aspectRatio + '%' }
          : {}
      }
      ref={container}
    >
      <div className="w-full h-full absolute top-0 left-0">
        {notSupported
          ? (
            <div className="padding-3">
              {errorMessages.noCameraAccessible}
            </div>
          )
          : null
        }
        {permissionDenied
          ? (
            <div className="padding-3">
              {errorMessages.permissionDenied}
            </div>
          )
          : null
        }
        <video
          ref={player}
          id="video"
          muted={true}
          autoPlay={true}
          playsInline={true}
          className="w-full h-full object-cover z-0"
          style={{
            transform: `rotateY(${currentFacingMode === 'user' ? '180deg' : '0deg'})`
          }}
        />
        <canvas
          className="hidden"
          ref={canvas}
        />
      </div>
    </div>
  );
};

WebCamera.displayName = 'Camera';

const initCameraStream = (
  stream,
  setStream,
  currentFacingMode,
  setNumberOfCameras,
  setNotSupported,
  setPermissionDenied,
) => {
  // stop any active streams in the window
  if (stream) {
    stream.getTracks().forEach(track => {
      track.stop();
    });
  }

  const constraints = {
    audio: false,
    video: {
      facingMode: currentFacingMode,
      width: { ideal: 1920 },
      height: { ideal: 1920 },
    },
  };

  if (navigator?.mediaDevices?.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(stream => {
        setStream(handleSuccess(stream, setNumberOfCameras));
      })
      .catch(err => {
        handleError(err, setNotSupported, setPermissionDenied);
      });
  } else {
    const getWebcam =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;
    if (getWebcam) {
      getWebcam(
        constraints,
        stream => {
          setStream(handleSuccess(stream, setNumberOfCameras));
        },
        err => {
          handleError(err, setNotSupported, setPermissionDenied);
        },
      );
    } else {
      setNotSupported(true);
    }
  }
};

const handleSuccess = (stream, setNumberOfCameras) => {
  navigator.mediaDevices
    .enumerateDevices()
    .then(r => setNumberOfCameras(r.filter(i => i.kind === 'videoinput').length));

  return stream;
};

const handleError = (error, setNotSupported, setPermissionDenied) => {
  console.error(error);

  //https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
  if (error.name === 'PermissionDeniedError') {
    setPermissionDenied(true);
  } else {
    setNotSupported(true);
  }
};

export default forwardRef(WebCamera);
