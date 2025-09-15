import React from "react";
import {
  StyledSummary,
  ErrorContainer,
  ErrorTitle,
  ErrorMessage,
  ErrorDetails,
  ErrorTrace,
  ErrorStack,
} from "./ErrorBoundary.styles";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    console.error("Error captured by error boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>¡Ups! Something went wrong.</ErrorTitle>
          <ErrorMessage>
            An error occurred while trying to display this section. Please try
            reloading the page or contact support if the problem persists.
          </ErrorMessage>
          {import.meta.env.MODE === "development" && (
            <ErrorDetails>
              <StyledSummary>Error Details</StyledSummary>
              <ErrorTrace>{this.state.error?.toString()}</ErrorTrace>
              <ErrorStack>{this.state.errorInfo?.componentStack}</ErrorStack>
            </ErrorDetails>
          )}
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
