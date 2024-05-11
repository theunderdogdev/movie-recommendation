from typing import Dict, Any


class ApiResponse:
    def __init__(self, message: str, status: int, data: Dict[str, Any] | None = None) -> None:
        self.message = message
        self.status = status
        self.data = data

    def as_dict(self) -> Dict[str, Any]:
        return self.__dict__
