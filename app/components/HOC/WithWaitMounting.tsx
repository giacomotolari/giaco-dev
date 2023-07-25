import React, { useEffect, useState } from "react";

type ComponentType<P> = React.FC<P>;

interface WithWaitMountingProps {}

export default function WithWaitMounting<P extends object>(
  WrappedComponent: ComponentType<P>,
): React.FC<P & WithWaitMountingProps> {
  const WithWaitMountingComponent: React.FC<P & WithWaitMountingProps> = (
    props,
  ) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
      return () => {
        setIsMounted(false);
      };
    }, []);

    if (!isMounted) {
      return null; // You can show some loading placeholder here if you want
    }

    return <WrappedComponent {...props} />;
  };

  // Set the display name explicitly for debugging and React Developer Tools
  WithWaitMountingComponent.displayName = `WithWaitMounting(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return WithWaitMountingComponent;
}
