import { useEffect, useState, FC, ReactNode } from "react";
import { Skeleton } from "@/src/components/shadcn/ui/skeleton";

type ComponentType<P> = FC<P>;

/**
 * Higher Order Component that adds a wait mounting behavior to a wrapped component.
 * @template P - Props type of the wrapped component.
 * @param {React.ComponentType<P>} WrappedComponent - The component to be wrapped.
 * @param {React.ReactNode} [skeletonContent] - The content to be displayed while the component is mounting.
 * @param {string} [className] - The CSS class name to be applied to the wrapper component.
 * @param {boolean} [blur] - Whether to apply a blur effect to the skeleton content.
 * @returns {React.FC<P>} - The wrapped component with wait mounting behavior.
 */
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
