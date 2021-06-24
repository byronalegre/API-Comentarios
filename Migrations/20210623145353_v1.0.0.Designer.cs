﻿// <auto-generated />
using System;
using BEComentarios;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BEComentarios.Migrations
{
    [DbContext(typeof(AplicationDbContext))]
    [Migration("20210623145353_v1.0.0")]
    partial class v100
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.7");

            modelBuilder.Entity("BEComentarios.Models.Comentario", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("creador")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<DateTime>("fechaComentario")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("texto")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("titulo")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("id");

                    b.ToTable("Comentario");
                });
#pragma warning restore 612, 618
        }
    }
}
