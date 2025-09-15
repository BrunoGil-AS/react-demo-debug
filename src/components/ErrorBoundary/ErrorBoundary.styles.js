import styled from "styled-components";

export const ErrorContainer = styled.div`
  padding: 20px;
  margin: 20px;
  border: 1px solid #ff6b6b;
  border-radius: 8px;
  background-color: #fff5f5;
`;

export const ErrorTitle = styled.h2`
  color: #c92a2a;
  margin-bottom: 15px;
`;

export const ErrorMessage = styled.p`
  color: #666;
  margin-bottom: 20px;
`;

export const ErrorDetails = styled.details`
  white-space: pre-wrap;
  margin-top: 10px;
`;

export const StyledSummary = styled.summary`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ff6b6b;
  border-radius: 8px;
  background-color: #fff5f5;
  color: #c92a2a;
  cursor: pointer;
  font-weight: bold;
  user-select: none;
`;

export const ErrorTrace = styled.p`
  color: #e03131;
  margin: 10px 0;
  font-family: monospace;
`;

export const ErrorStack = styled.p`
  color: #495057;
  margin: 10px 0;
  font-family: monospace;
  white-space: pre;
`;
