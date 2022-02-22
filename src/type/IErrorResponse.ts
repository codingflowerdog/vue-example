/**
 * 에러 응답
 */
export interface IErrorResponse {
    // 코드
    code: string;

    // 상태
    status: string;

    // 메세지
    message: string;
}