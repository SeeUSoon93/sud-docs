/**
 * 메인 메뉴 경로에 대한 리다이렉트 경로를 반환합니다.
 * @param {string} path - 현재 경로
 * @param {Object} itemsList - 메뉴 아이템 리스트
 * @returns {string|null} - 리다이렉트할 경로
 */
export const getRedirectPath = (path, itemsList) => {
  const firstSegment = path.split("/")[1];
  const menuItems = itemsList[firstSegment];
  return menuItems && menuItems.length > 0
    ? `/${firstSegment}/${menuItems[0].key}`
    : null;
};
