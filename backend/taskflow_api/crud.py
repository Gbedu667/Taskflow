from sqlalchemy.orm import Session
from . import models
from .schemas import TaskCreate

def get_tasks(db: Session):
    return db.query(models.Task).all()

def create_task(db: Session, task: TaskCreate):
    new_task = models.Task(
        title=task.title,
        description=task.description
    )
    db.add(new_task)
    db.commit()
    db.refresh(new_task)
    return new_task

def delete_task(db: Session, task_id: int):
    task = db.query(models.Task).filter(models.Task.id == task_id).first()
    if task:
        db.delete(task)
        db.commit()
