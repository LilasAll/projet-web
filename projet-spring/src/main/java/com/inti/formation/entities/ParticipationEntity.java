package com.inti.formation.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ParticipationEntity {
	
	private long participationId;
	private long userId;
	private long demandId;
	private boolean isAccepted;
	
	public ParticipationEntity(long participationId, long userId, long demandId, boolean isAccepted) {
		super();
		this.participationId = participationId;
		this.userId = userId;
		this.demandId = demandId;
		this.isAccepted = isAccepted;
	}

	public ParticipationEntity() {
		super();
	}

	@Override
	public String toString() {
		return "ParticipationEntity [participationId=" + participationId + ", userId=" + userId + ", demandId="
				+ demandId + ", isAccepted=" + isAccepted + "]";
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long getParticipationId() {
		return participationId;
	}

	public void setParticipationId(long participationId) {
		this.participationId = participationId;
	}
	
	@Column
	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	@Column
	public long getDemandId() {
		return demandId;
	}

	public void setDemandId(long demandId) {
		this.demandId = demandId;
	}

	@Column
	public boolean isAccepted() {
		return isAccepted;
	}

	public void setAccepted(boolean isAccepted) {
		this.isAccepted = isAccepted;
	}
	
	

}
