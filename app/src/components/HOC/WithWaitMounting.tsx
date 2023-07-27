import { useEffect, useState, FC, ReactNode } from "react";
import { Skeleton } from "../shadcn/ui/skeleton";

type ComponentType<P> = FC<P>;

export default function WithWaitMounting<P extends object>(
  WrappedComponent: ComponentType<P>,
  skeletonContent?: ReactNode,
  className?: string,
  blur?: boolean,
): FC<P> {
  const WithWaitMountingComponent: FC<P> = (props) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
      setIsMounted(true);
      return () => {
        setIsMounted(false);
      };
    }, []);

    if (!isMounted) {
      return skeletonContent ? (
        <Skeleton className={`${className} ${blur && "blur"} rounded-full`}>
          {skeletonContent}
        </Skeleton>
      ) : null;
    }

    return <WrappedComponent {...props} />;
  };

  // Set the display name explicitly for debugging and React Developer Tools
  WithWaitMountingComponent.displayName = `WithWaitMounting(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return WithWaitMountingComponent;
}
