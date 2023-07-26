import React, { useEffect, useState } from "react";

type ComponentType<P> = React.FC<P>;

interface WithWaitMountingProps {}

export default function WithWaitMounting<P extends object>(
  WrappedComponent: ComponentType<P>,
  skeleton?: React.ReactNode,
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
      return skeleton ? skeleton : null;
    }

    return <WrappedComponent {...props} />;
  };

  // Set the display name explicitly for debugging and React Developer Tools
  WithWaitMountingComponent.displayName = `WithWaitMounting(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return WithWaitMountingComponent;
}
