# Amplify Gen 2 CLI를 프로젝트 로컬 Node 20으로 실행하는 헬퍼 스크립트.
# 시스템 Node(v16)는 건드리지 않습니다. 이 세션 안에서만 PATH를 바꿉니다.
#
# 사용 예:
#   .\ampx.ps1 sandbox            # 개인 클라우드 샌드박스 배포 (AWS 자격증명 필요)
#   .\ampx.ps1 sandbox delete     # 샌드박스 삭제
$env:PATH = "$PSScriptRoot\.node\node-v20.19.0-win-x64;$env:PATH"
npx ampx @args
