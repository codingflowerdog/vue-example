/**
 * 리소스 상세 정보
 */
export interface IResourceDetail {
    // 리소스 ID
    id: number;

    // 리소스 이름
    resourceName: string;

    // UUID
    uuid: string;

    // 생성일
    createdDate: string;
}