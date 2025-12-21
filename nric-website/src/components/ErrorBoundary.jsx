import React from "react";
import { FiAlertTriangle, FiRefreshCw, FiHome } from "react-icons/fi";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an analytics service here
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = "/"; 
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center px-6 py-12 bg-gray-50/50">
          <div className="max-w-md w-full text-center space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            {/* Icon Section */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-100 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative size-20 bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-100">
                  <FiAlertTriangle className="size-10 text-amber-500" />
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="space-y-3">
              <h2 className="font-serif text-3xl font-bold text-gray-900">
                Oops! Something went wrong
              </h2>
              <p className="text-gray-600 leading-relaxed">
                An unexpected error occurred. Don't worry, our team has been notified. 
                Please try refreshing the page or head back home.
              </p>
              
              {/* Optional: Developer Error Message (Keep subtle) */}
              {process.env.NODE_ENV === 'development' && (
                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-100">
                  <p className="text-xs font-mono text-red-600 break-words">
                    {this.state.error?.toString()}
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => window.location.reload()}
                className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg shadow-emerald-200"
              >
                <FiRefreshCw className="size-4" />
                Reload Page
              </button>
              
              <button
                onClick={this.handleReset}
                className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl border border-gray-200 transition-all shadow-sm"
              >
                <FiHome className="size-4" />
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}