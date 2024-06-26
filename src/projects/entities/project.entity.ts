import { Column, PrimaryColumn } from 'typeorm';
import crypto from 'crypto';

export enum ProjectStatus {
    Pending = 'pending',
    Active = 'active',
    Cancelled = 'cancelled',
    Completed = 'completed',
}

export class Project {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true, type: 'datetime' })
  started_at: Date | null

  @Column({ nullable: true, type: 'datetime' })
  cancelled_at: Date | null

  @Column({ nullable: true, type: 'datetime' })
  forecasted_at: Date | null;
  
  @Column({ type: 'simple-enum'})
  status: ProjectStatus;

  constructor(
    props: {
        name: string;
        description: string;
        started_at?: Date | null;
        cancelled_at?: Date | null;
        forecasted_at?: Date | null;
    }, id?: string
  ) {
    Object.assign(this, props);
    this.id = id ?? crypto.randomUUID();
  }
}
