import React from "react";
import ErrorBoundary from "./ErrorBoundary";

/**
 * Higher-Order Component (HOC) wraps a component with an ErrorBoundary.
 * @param {React.ComponentType} WrappedComponent - The component to wrap
 * @param {string} componentName - The name of the component for error identification
 * @returns {React.ComponentType} Component wrapped with ErrorBoundary
 */
export const withErrorBoundary = (
  WrappedComponent,
  componentName = "Component"
) => {
  const WithErrorBoundary = (props) => (
    <ErrorBoundary>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );

  // Assign a displayName for easier debugging
  WithErrorBoundary.displayName = `WithErrorBoundary(${componentName})`;

  return WithErrorBoundary;
};
